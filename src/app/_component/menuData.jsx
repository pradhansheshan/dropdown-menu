
const menuItems = [
  {
    name: "Rename",
    key: "rename",
  },
  {
    name: "Copy Link",
    key: "copyLink"
  },
  {
    name: "Create New",
    key: "createNew",
    subItems: [
      { name: "Folder", key: "newFolder" },
      { name: "File", key: "newFile" },
        { type: "separator" },
      { name: "List", key: "list" }
    ]
  },
  { type: "separator" },
  {
    name: "Color & Icon",
    key: "colorAndIcon"
  },
  {
    name: "Space Settings",
    key: "spaceSettings"
  },
  {
    name: "Templates",
    key: "templates"
  },
  { type: "separator" },
  {
    name: "Add to Favorites",
    key: "addToFavorites"
  },
  {
    name: "Hide Space",
    key: "hideSpace"
  },
  {
    name: "Duplicate",
    key: "duplicate"
  },
  {
    name: "Archive",
    key: "archive"
  },
  {
    name: "Delete",
    key: "delete"
  }
];

export default menuItems; 