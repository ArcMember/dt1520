-- CreateTable
CREATE TABLE "Page" (
    "branch" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "mtime" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Page_url_key" ON "Page"("url");
