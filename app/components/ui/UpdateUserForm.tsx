"use client";

import { useState } from "react";
import { updateUser } from "@/app/api/services/User";
import Image from "next/image";
import { User } from "@/app/interfaces/users.interface";
import { useRouter } from "next/navigation";

interface UpdateUserFormProps {
  user: User;
}

export default function UpdateUserForm({ user }: UpdateUserFormProps) {
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio || "");
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("bio", bio);

      if (password) {
        formData.append("password", password);
      }
      if (profilePic) {
        formData.append("profilePic", profilePic);
      }

      await updateUser(user.id, formData);
      router.push("/blog");
    } catch (error) {
      console.error("Failed to update user information:", error);
    }
  };

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePic(file);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="username" className="mb-1 block font-bold">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded border border-gray-300 px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="mb-1 block font-bold">
          Password
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded border border-gray-300 px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bio" className="mb-1 block font-bold">
          Bio
        </label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full rounded border border-gray-300 px-4 py-2"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="profilePic" className="mb-1 block font-bold">
          Profile Picture
        </label>
        {user.profilePic && (
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/images/${user.profilePic}`}
            alt="Profile Picture"
            width={100}
            height={100}
            className="mb-2 rounded"
          />
        )}
        <input
          type="file"
          id="profilePic"
          accept="image/*"
          onChange={handleProfilePicChange}
          className="w-full"
        />
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Update
      </button>
    </form>
  );
}
