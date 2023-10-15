"use client"
import Image from 'next/image'
import { useState } from "react";

export default function Home() {
	const [text,setText] = useState<string>('')
	const [todos, setTodos] = useState<string[]>([]);
	const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
		console.log(text)
	};
	const addTodos = () => {
		const newTodos = [...todos];
		newTodos.push(text);
		setTodos(newTodos);
		setText("");
	};
	const deleteTodo = (index: number) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};
	return (
		<main>
			<div className="mb-4 space-y-3">
				<input type="text" value={text} onChange={changeText} className="border px-4 py-2 mr-4 rounded-lg focus:outline-none focus:border-blue-400" />
				<button onClick={addTodos} className="px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scal-95 duration-200">追加</button>
			</div>
			<div>
				<ul className="space-y-3">
					{todos.map((todo, index) => (
					<li key={todo} className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
						<p>{todo}</p>
						<button onClick={() => deleteTodo(index)} className="text-red-500">完了</button>
					</li>
					))}
				</ul>
			</div>
		</main>
	)
}
