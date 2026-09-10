"use client";

import { useEffect, useState } from "react";
import { Loader2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StorefrontSettings() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);
  const [settings, setSettings] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((res) => res.json())
      .then((data) => {
        setSettings(data);
        setLoading(false);
      });
  }, []);

  const handleChange = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleMediaUpload = async (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(key);
    const form = new FormData();
    form.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      if (data.url) {
        handleChange(key, data.url);
      }
    } catch (err) {
      alert("Upload failed");
    } finally {
      setUploading(null);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (res.ok) alert("Settings saved!");
      else alert("Failed to save.");
    } catch (err) {
      alert("An error occurred");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8 flex justify-center"><Loader2 className="animate-spin text-gray-500" /></div>;

  const renderMediaInput = (key: string, label: string) => (
    <div className="border border-gray-200 p-4 rounded-md bg-gray-50 flex flex-col items-center gap-3">
      <span className="text-sm font-medium">{label}</span>
      {settings[key] ? (
        <img src={settings[key]} alt="Preview" className="w-24 h-32 object-cover rounded-md border shadow-sm" />
      ) : (
        <div className="w-24 h-32 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-400">None</div>
      )}
      
      <label className="cursor-pointer bg-white border border-gray-300 text-sm px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors w-full text-center flex items-center justify-center gap-2">
        {uploading === key ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
        Upload
        <input type="file" className="hidden" accept="image/*,video/*" onChange={(e) => handleMediaUpload(e, key)} disabled={uploading === key} />
      </label>
    </div>
  );

  return (
    <div className="p-6 max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Storefront Media Settings</h1>
        <Button onClick={handleSave} disabled={saving} className="bg-black text-white px-6">
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Reels Section Media</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {renderMediaInput("reel1_image", "Reel 1")}
            {renderMediaInput("reel2_image", "Reel 2")}
            {renderMediaInput("reel3_image", "Reel 3")}
            {renderMediaInput("reel4_image", "Reel 4")}
            {renderMediaInput("reel5_image", "Reel 5")}
            {renderMediaInput("reel6_image", "Reel 6")}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Testimonials Section Media</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {renderMediaInput("test1_image", "Testimonial 1")}
            {renderMediaInput("test2_image", "Testimonial 2")}
            {renderMediaInput("test3_image", "Testimonial 3")}
            {renderMediaInput("test4_image", "Testimonial 4")}
            {renderMediaInput("test5_image", "Testimonial 5")}
            {renderMediaInput("test6_image", "Testimonial 6")}
          </div>
        </div>
      </div>
    </div>
  );
}
