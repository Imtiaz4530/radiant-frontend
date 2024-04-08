"use client";
import { useSearchParams } from "next/navigation";
import FeatureIcons from "./FeatureIcons";
const Feature = () => {
  const query = useSearchParams();
  const findQuery = query.get("category");
  return <> {findQuery === "SMART WATCH" && <FeatureIcons />}</>;
};

export default Feature;
