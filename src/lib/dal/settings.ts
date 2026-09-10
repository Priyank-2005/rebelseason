import { prisma } from "@/lib/db";

export async function getSettings() {
  try {
    const settings = await prisma.$queryRaw<Array<{key: string, value: string}>>`SELECT * FROM "settings"`;
    return settings.reduce((acc, s) => ({ ...acc, [s.key]: s.value }), {} as Record<string, string>);
  } catch (error) {
    console.error("Failed to fetch settings via raw query", error);
    return {};
  }
}

export async function updateSetting(key: string, value: string) {
  try {
    await prisma.$executeRaw`
      INSERT INTO "settings" ("key", "value") 
      VALUES (${key}, ${value}) 
      ON CONFLICT ("key") DO UPDATE SET "value" = EXCLUDED."value"
    `;
  } catch (error) {
    console.error("Failed to update setting via raw query", error);
  }
}

export async function getSetting(key: string, defaultValue = "") {
  try {
    const s = await prisma.$queryRaw<Array<{key: string, value: string}>>`SELECT * FROM "settings" WHERE "key" = ${key} LIMIT 1`;
    return s[0]?.value || defaultValue;
  } catch (error) {
    return defaultValue;
  }
}
