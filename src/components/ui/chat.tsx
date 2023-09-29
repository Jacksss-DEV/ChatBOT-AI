'use client'

import { ScrollArea } from "./scroll-area";
import {Avatar, AvatarFallback, AvatarImage} from "./avatar";
import {Button} from "./button";
import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from "./card";
import { Input } from "./input";
import {useChat} from "ai/react";



export function Chat() {

    const {messages, input, handleInputChange, handleSubmit} = useChat({
      api: '/api/chat',

    });

    return (
        
      <Card className=" mt-11 w-[440px] h-[800px]">
        <CardHeader>
          <CardTitle> Chat AI</CardTitle>
          <CardDescription>Usando o caralho do NextJS para criar um bot de IA</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map(message => {
                return (
                <div key={message.id} className="flex gap-3 text-slate-600 text-sm mt-3">
                {message.role === 'user' && (
                  <Avatar>
                  <AvatarFallback>JS</AvatarFallback>
                  <AvatarImage src="https://github.com/Jacksss-DEV.png"></AvatarImage>
                </Avatar>
                )}
                {message.role === 'assistant' && (
                  <Avatar>
                  <AvatarFallback>RS</AvatarFallback>
                  <AvatarImage src="https://github.com/rocketseat.png"></AvatarImage>
                </Avatar>
                )}
                
                <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">{message.role === 'user' ? 'Usuário' : 'AI'}</span>
                {message.content}
                </p>
               
                </div>
            )
            }
            )
            }
          </ScrollArea>
        </CardContent>
        <CardFooter>
            <form className="w-full flex gap-2" onSubmit={handleSubmit}> 
            <Input placeholder="Como posso te ajudar?" value={input} onChange={handleInputChange}></Input>
          <Button type="submit">Enviar</Button>
          </form>
        </CardFooter>
      </Card>
    );
}