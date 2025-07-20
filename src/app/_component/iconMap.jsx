import { FolderPlus, Link, ClipboardPaste, FolderPen, Palette, Settings, Trash, FileArchive, EyeOff, HeartPlus, LayoutTemplate, Copy, File, Folder, List } from "lucide-react";


const iconMap = {
  rename: FolderPen,
  copyLink: Link,
  paste: ClipboardPaste,
  createNew: FolderPlus,
  colorAndIcon: Palette,
  spaceSettings: Settings,
  templates: LayoutTemplate,
  addToFavorites: HeartPlus,
  hideSpace:EyeOff,
  duplicate: Copy,
  archive: FileArchive,
  delete: Trash,
  newFile: File,
  newFolder: Folder,
  list: List
}

export default iconMap;