import { useAppSelector } from "@/app/redux";
import { useGetTasksQuery } from "@/state/api";

type Props = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
}

const TableView = ({ id, setIsModalNewTaskOpen }: Props) => {

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id) });

  if (isLoading) {
    return <div className="">Loading...</div>;
  }
  if (error) {
    return <div className="">An error occurred while fetching tasks...</div>;
  }

  return (
    <div className="">TableView</div>
  )
}

export default TableView