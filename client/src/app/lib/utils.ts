export const dataGridClassNames =
  "border border-gray-200 bg-white shadow dark:border-stroke-dark dark:bg-dark-secondary dark:text-gray-200";

export const dataGridSxStyles = (isDarkMode: boolean) => {
  return {
    "& .MuiDataGrid-columnHeaders": {
      color: `${isDarkMode ? "#e5e7eb" : ""}`,
      '& [role="row"] > *' : {
        backgroundColor: `${isDarkMode ? "1d1f21" : "white"}`,
        borderColor: `${isDarkMode ? "2d3135" : ""}`,
      }
    },
    "& .MuiIconbutton-root": {
      color: `${isDarkMode ? "a3a3a3" : ""}`,
    }
  };
};
