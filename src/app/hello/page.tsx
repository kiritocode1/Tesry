import { FC } from 'react'

import OpenAI from "openai";

const openai = new OpenAI({
	apiKey:
		process.env.OPENAI_API_KEY ||
		"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",
});



interface pageProps {

}







const page: FC<pageProps> = async ({ }) => {

    let hehe = "hii";






async function GeneratePromptAnswer(prompt: FormData) {
	"use server";
	const value = prompt.get("text_query")?.toString()!;

	const completion = await openai.chat.completions.create({
		model: "gpt-3.5-turbo-16k-0613",
		messages: [
			{
				role: "system",
				content: "You are a helpful assistant. pradeep singh's alo is 1800 ",
			},
			{ role: "user", content: value},
		],
	});

    const gg = completion.choices[0].message.content;
    console.log(gg);
    return gg;

}









    return (
			<div>
				<form action={GeneratePromptAnswer}>
					<input type="text" name="text_query" className='text-black'/>
					<button>Submit</button>
				</form>

            {<p>{hehe}</p> }
			</div>
		);
}

export default page