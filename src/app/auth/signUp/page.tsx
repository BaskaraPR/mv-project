import Link from "@/app/(main)/components/button";
import SignupForm from "./components/form";
import { FaArrowLeft } from "react-icons/fa";

export default function SignUpPage() {
  return (
    <div>
      <Link href="/" variant={"tertiary"}>
        <FaArrowLeft /> Kembali
      </Link>
      <SignupForm />
    </div>
  );
}
