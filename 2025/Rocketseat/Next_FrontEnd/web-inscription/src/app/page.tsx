import Button from "@/components/button";
import IconButton from "@/components/iconButton";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { ArrowRight, Copy, Mail } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Button type="button">
        Click
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

    <div>
      <InputRoot>
        <InputIcon>
          <Mail/>
        </InputIcon>
        <InputField placeholder="Digite seu email..." />
      </InputRoot>  
    </div>

    <div>
      <InputRoot error>
        <InputIcon>
          <Mail/>
        </InputIcon>
        <InputField placeholder="Digite seu email..." />
      </InputRoot>  
    </div>


    </main>
  );
}
