import type { Metadata } from "next";
import { DummyDataBlog } from "../../DummyData/DimmyDataBlog";
import PrimaryCard from "@/app/Components/Card/PrimaryCard";

export const metadata: Metadata = {
  title: "Read My Blog",
  description: "Blog Page",
};

const Blog = () => {
  const DataDummy = DummyDataBlog.sort((a, b) => b.id - a.id);

  return (
    <div className="grid grid-cols-12 w-full h-screen overflow-y-scroll">
      <div className="col-span-12 mt-10">
        {DataDummy.map((data) => {
          return (
            <PrimaryCard
              key={data.id}
              id={data.id}
              data={data}
              isMetaData={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
