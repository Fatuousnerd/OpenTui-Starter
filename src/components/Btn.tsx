import {
	type BoxOptions,
	BoxRenderable,
	type RenderContext,
} from "@opentui/core";

export class ConsoleButtonRenderable extends BoxRenderable {
	private _label: string = "Button";

	constructor(ctx: RenderContext, options: BoxOptions & { label?: string }) {
		super(ctx, options);
		if (options.label) this._label = options.label;
		this.borderStyle = "single";
		this.padding = 2;
	}

	getLabel(): string {
		return this._label;
	}

	set label(value: string) {
		this._label = value;
		this.requestRender();
	}
}
