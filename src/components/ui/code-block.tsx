import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeBlockProps = {
	language: string;
	filename?: string;
	highlightLines?: number[];
	code: string;
};

export const CodeBlock = ({
	language,
	filename,
	highlightLines = [],
	code,
}: CodeBlockProps) => {
	return (
		<div className="relative w-full rounded-lg bg-slate-900 p-4 font-mono text-sm">
			{filename && (
				<div className="flex justify-between items-center py-2">
					<div className="text-xs text-zinc-400">{filename}</div>
				</div>
			)}
			<SyntaxHighlighter
				language={language}
				style={atomDark}
				customStyle={{
					margin: 0,
					padding: 0,
					background: "transparent",
					fontSize: "0.875rem",
				}}
				wrapLines={true}
				showLineNumbers={true}
				lineProps={(lineNumber) => ({
					style: {
						backgroundColor: highlightLines.includes(lineNumber)
							? "rgba(255,255,255,0.1)"
							: "transparent",
						display: "block",
						width: "100%",
					},
				})}
				PreTag="div"
			>
				{String(code)}
			</SyntaxHighlighter>
		</div>
	);
};
