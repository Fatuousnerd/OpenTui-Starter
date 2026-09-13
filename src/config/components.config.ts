import { extend } from "@opentui/react";
import { ConsoleButtonRenderable } from "../components/Btn";

declare module "@opentui/react" {
	export interface OpenTUIComponents {
		consoleButton: typeof ConsoleButtonRenderable;
	}
}

extend({ consoleButton: ConsoleButtonRenderable });
