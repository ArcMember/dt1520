-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Page" (
    "branch" TEXT NOT NULL DEFAULT '',
    "title" TEXT NOT NULL DEFAULT '',
    "content" TEXT NOT NULL DEFAULT '',
    "url" TEXT NOT NULL,
    "cover" TEXT NOT NULL DEFAULT '',
    "mtime" TEXT NOT NULL DEFAULT '',
    "date" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Page" ("branch", "content", "cover", "mtime", "title", "url") SELECT "branch", "content", "cover", "mtime", "title", "url" FROM "Page";
DROP TABLE "Page";
ALTER TABLE "new_Page" RENAME TO "Page";
CREATE UNIQUE INDEX "Page_url_key" ON "Page"("url");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
