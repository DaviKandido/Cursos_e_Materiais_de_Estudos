"use client";

import Button from "@/components/button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { User, Mail, ArrowRight } from "lucide-react";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const subscriptionSchema = z.object({
  name: z.string().min(2, "Digite seu nome completo"),
  email: z.string().email("Digite um e-mail valido"),
});

type SubscriptionSchema = z.infer<typeof subscriptionSchema>;

export default function SubscriptionForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  });

  const onSubscribe = (data: SubscriptionSchema) => {
    console.log(data);
  };

  return (
    <form
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
      onSubmit={handleSubmit(onSubscribe)}
    >
      <h2 className="font-heading font-semibold text-gray-100 text-xl">
        Inscrição
      </h2>

      <div className="space-y-6">
        <div className="space-y-2">
          <InputRoot error={errors.name?.message ? true : false}>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome Completo"
              {...register("name")}
            />
          </InputRoot>

          {errors.name && ( 
            <p className="text-danger text-xs font-semibold">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot error={errors.email?.message ? true : false}>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField 
                type="email" 
                placeholder="E-mail" 
                {...register("email")}
            />
          </InputRoot>

          {errors.email && ( 
            <p className="text-danger text-xs font-semibold">{errors.email.message}</p>
          )}
        </div>


      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  );
}