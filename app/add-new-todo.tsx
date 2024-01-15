"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button} from '@chakra-ui/react';

import React from "react";
async function addTodo(name, refresh) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  refresh();
}


export default function AddNewTodo() {
  const router = useRouter();
  let [name, setName] = useState();
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      <Button ml={5} colorScheme='green' onClick={async () => {
        await addTodo(name, router.refresh);
        setName("");
      }}
      >Add</Button>
    </div>
  );
}
