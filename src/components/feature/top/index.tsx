import { LinkButton } from "@/components/link-button/link-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Boxes } from "@/components/ui/background-boxes";
import { CodeBlock } from "@/components/ui/code-block";
import { CometCard } from "@/components/ui/comet-card";

function getBirthdayInfo(
	birthYear: number,
	birthMonth: number,
	birthDay: number,
) {
	const today = new Date();
	const currentYear = today.getFullYear();
	const birthdayThisYear = new Date(currentYear, birthMonth - 1, birthDay);

	let nextBirthday = birthdayThisYear;
	if (
		today.getMonth() + 1 > birthMonth ||
		(today.getMonth() + 1 === birthMonth && today.getDate() > birthDay)
	) {
		nextBirthday = new Date(currentYear + 1, birthMonth - 1, birthDay);
	}

	const diffTime = nextBirthday.getTime() - today.setHours(0, 0, 0, 0);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	let age = currentYear - birthYear;
	if (
		today.getMonth() + 1 < birthMonth ||
		(today.getMonth() + 1 === birthMonth && today.getDate() < birthDay)
	) {
		age -= 1;
	}

	const isToday =
		today.getMonth() + 1 === birthMonth && today.getDate() === birthDay;

	return {
		nextBirthday,
		diffDays,
		isToday,
		age,
	};
}

const Top = () => {
	const birthYear = 2003;
	const birthMonth = 7;
	const birthDay = 22;
	const { age } = getBirthdayInfo(birthYear, birthMonth, birthDay);
	const code = `{
	"name": "PoPodada",
	"age": "${age}",
	"Github": "https://github.com/PoPodada"
	"X": "https://x.com/PButabara"

}`;
	return (
		<div className="relative font-sans  justify-items-center min-h-screen   ">
			<div className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
				<Boxes />
				<main className="flex flex-col row-start-2 items-center sm:items-start">
					<CometCard>
						<div
							className="my-10 flex w-100 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:my-20 md:p-4"
							style={{
								transformStyle: "preserve-3d",
								transform: "none",
							}}
						>
							<div className="mx-2 flex-1">
								<div className="mt-2 aspect-[4/4] w-full flex flex-col">
									<div className="flex justify-between">
										<Avatar className="w-16 h-16">
											<AvatarImage
												src="https://github.com/PoPodada.png"
												alt="@shadcn"
											/>
											<AvatarFallback></AvatarFallback>
										</Avatar>
										<div>
											<LinkButton
												type="github"
												href="https://github.com/PoPodada"
											/>
											<LinkButton
												type="x"
												href="https://x.com/PButabara"
											/>
										</div>
									</div>
									<div className="mt-2 flex justify-center items-center flex-1">
										<CodeBlock
											language="json"
											filename="profile.json"
											code={code}
										/>
									</div>
								</div>
							</div>
							<div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
								<div className="text-xs text-gray-300 opacity-50">
									#F7RA
								</div>
							</div>
						</div>
					</CometCard>
				</main>
			</div>
		</div>
	);
};

export default Top;
