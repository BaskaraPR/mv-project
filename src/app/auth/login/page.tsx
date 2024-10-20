import LoginForm from "./components/form";
import Link from "@/app/(main)/components/button";
import { FaArrowLeft } from "react-icons/fa6";

export default function LoginPage() {
  return (
    <div>
      <Link href="/" variant={"tertiary"}>
        <FaArrowLeft /> Kembali
      </Link>
      <LoginForm />
    </div>
  );
}
