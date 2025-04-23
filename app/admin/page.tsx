"use client";
import React, { useEffect, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { createClient } from "../utils/supabase/client";
import { BASE_IMG_URL } from "../helpers/image_url";
const supabase = createClient();
type Skill = {
  id: string;
  image: string;
  description: string;
};

type Project = {
  id: string;
  name: string;
  image: string;
  skills: string[];
  level: string;
  created_at?: string;
  projectUrl: string;
  projectGitUrl: string;
};

export default function Page() {
  const [skills, setSkills] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState("");
  const [imageDescription, setImageDescription] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [github, setGithub] = useState("");
  const [telegram, setTelegram] = useState("");
  const [userId, setUserId] = useState("");
  const [description, setDescription] = useState("");

  const [projectName, setProjectName] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [projectSkills, setProjectSkills] = useState<string[]>([]);
  const [projectLevel, setProjectLevel] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [projectGitUrl, setProjectGitUrl] = useState("");
  const [projectId, setProjectId] = useState("");

  const [skillData, setSkillData] = useState<Skill[]>([]);
  const [projectData, setProjectData] = useState<Project[]>([]);
  console.log(projectImage);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.from("Portfolio1").select("*").single();
      if (data) {
        setName(data.name);
        setDescription(data.description);
        setSkills(data.skills || []);
        setEmail(data.email);
        setPhone(String(data.phone));
        setGithub(data.github);
        setTelegram(data.telegram);
        setUserId(data.id);
      }
    };
    const fetchSkills = async () => {
      const { data } = await supabase.from("Skills").select("*");
      if (data) setSkillData(data);
    };
    const fetchProjects = async () => {
      const { data } = await supabase.from("Loyihalar").select("*");
      if (data) setProjectData(data);
    };

    fetchUser();
    fetchSkills();
    fetchProjects();
  }, []);

  const uploadFile = async (file: File, type: "skills" | "loyihalar") => {
    try {
      console.log(type);
      const { data } = await supabase.storage
        .from(type)
        .upload(`${type}_${Date.now()}`, file);
      if (data?.path) {
        const url = `${`https://gfeucoulfqzixutkmviu.supabase.co/storage/v1/object/public/${type}/`}${
          data.path
        }`;
        if (type === "skills") {
          setImageUrl(url);
        } else {
          setProjectImage(url);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveSkill = async () => {
    try {
      await supabase
        .from("Skills")
        .insert([{ image: imageUrl, description: imageDescription }]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteSkill = async (id: string) => {
    try {
      await supabase.from("Skills").delete().eq("id", id);
      setSkillData(skillData.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveUser = async () => {
    try {
      await supabase
        .from("Portfolio1")
        .update({ name, description, skills, email, phone, github, telegram })
        .eq("id", userId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveProject = async () => {
    if (projectId === "") {
      try {
        await supabase.from("Loyihalar").insert([
          {
            name: projectName,
            skills: projectSkills,
            image: projectImage,
            level: projectLevel,
            projectGitUrl,
            projectUrl,
          },
        ]);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const { data } = await supabase
          .from("Loyihalar")
          .update({
            name: projectName,
            skills: projectSkills,
            image: projectImage,
            level: projectLevel,
            projectGitUrl,
            projectUrl,
          })
          .eq("id", projectId)
          .select();
      } catch (error) {
        console.log(error);
      }
    }
  };
  const DeleteProject = async (id: string) => {
    const { error } = await supabase.from("Loyihalar").delete().eq("id", id);
  };
  const UpdateProject = async (project: Project) => {
    setProjectLevel(project.level);
    setProjectGitUrl(project.projectGitUrl);
    setProjectUrl(project.projectUrl);
    setProjectImage(project.image);
    setProjectName(project.name);
    setProjectSkills(project.skills);
    setProjectId(project.id);
  };

  return (
    <div className="max-w-[1040px] mx-auto p-4 text-white">
      <h1 className="text-2xl font-bold text-center mb-4">
        Portfolio Ma`lumotlar
      </h1>

      {/* User Data */}
      <div className="bg-gray-800 rounded-lg p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Foydalanuvchi Ma`lumotlari
        </h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control mb-2 bg-gray-800 "
          placeholder="Ism"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control mb-2 bg-gray-800"
          placeholder="Tavsif"
        />
        <input
          value={skills}
          onChange={(e) =>
            setSkills(e.target.value.split(",").map((s) => s.trim()))
          }
          className="form-control mb-2 bg-gray-800 "
          placeholder="Skills (vergul bilan)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-2 bg-gray-800 "
          placeholder="Email"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-control mb-2 bg-gray-800"
          placeholder="Telefon"
        />
        <input
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          className="form-control mb-2 bg-gray-800 "
          placeholder="Github"
        />
        <input
          value={telegram}
          onChange={(e) => setTelegram(e.target.value)}
          className="form-control mb-2 bg-gray-800"
          placeholder="Telegram"
        />
        <button
          onClick={handleSaveUser}
          className="btn btn-success w-full mt-2"
        >
          Yangilash
        </button>
      </div>

      {/* Skills */}
      <div className="bg-gray-800 rounded-lg p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="flex items-center mb-2">
          <input
            type="file"
            onChange={(e) =>
              e.target.files && uploadFile(e.target.files[0], "skills")
            }
            className="form-control mr-2"
          />
          <input
            value={imageDescription}
            onChange={(e) => setImageDescription(e.target.value)}
            placeholder="Description"
            className="form-control"
          />
        </div>
        <button
          onClick={handleSaveSkill}
          className="btn btn-success w-full mb-4"
        >
          Saqlash
        </button>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillData.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-700 rounded-lg p-2 text-center"
            >
              <img
                src={skill.image}
                alt={skill.description}
                className="mx-auto h-20 object-contain"
              />
              <p className="mt-2 text-sm">{skill.description}</p>
              <button
                onClick={() => handleDeleteSkill(skill.id)}
                className="btn btn-danger w-full mt-2"
              >
                O`chirish
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Loyihalar */}
      <div className="bg-gray-800 rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Loyihalar</h2>
        <input
          type="file"
          onChange={(e) =>
            e.target.files && uploadFile(e.target.files[0], "loyihalar")
          }
          className="form-control mb-2"
        />
        <input
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Loyiha nomi"
          className="form-control mb-2"
        />
        <input
          value={projectSkills}
          onChange={(e) =>
            setProjectSkills(e.target.value.split(",").map((s) => s.trim()))
          }
          placeholder="Skillar"
          className="form-control mb-2"
        />
        <input
          value={projectLevel}
          onChange={(e) => setProjectLevel(e.target.value)}
          placeholder="Daraja"
          className="form-control mb-2"
        />
        <input
          value={projectUrl}
          onChange={(e) => setProjectUrl(e.target.value)}
          placeholder="DemoUrl"
          className="form-control mb-2"
        />
        <input
          value={projectGitUrl}
          onChange={(e) => setProjectGitUrl(e.target.value)}
          placeholder="GithubUrl"
          className="form-control mb-2"
        />

        <button
          onClick={handleSaveProject}
          className="btn btn-success w-full mb-4"
        >
          Saqlash
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectData.map((project) => (
            <div key={project.id} className="bg-gray-700 rounded-lg p-4">
              <img
                src={project.image}
                alt="project"
                className="h-32 w-full object-cover rounded mb-2"
              />
              <h3 className="text-lg font-bold mb-1">{project.name}</h3>
              <p className="text-sm mb-1">Skills: {project.skills}</p>
              <p className="text-sm">Daraja: {project.level}</p>
              <button
                onClick={() => DeleteProject(project.id)}
                className="btn btn-danger"
              >
                {" "}
                delete
              </button>
              <button
                onClick={() => UpdateProject(project)}
                style={{ marginLeft: "5px" }}
                className="btn btn-warning "
              >
                {" "}
                edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
