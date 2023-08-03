import HeadTitle from "@/components/HeadTitle";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Detail({ params }) {
  const router = useRouter();
  const { query } = router;
  const [title, id] = query.params || [];
  useEffect(() => {}, []);
  return (
    <div>
      <HeadTitle title={title} />
      {<h1>{title}</h1> || "Loading..."}
    </div>
  );
}

export default Detail;

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
