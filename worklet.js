class SamplePainter {
	static get inputProperties() {
		return [
			'--rect-color',
		];
	}

	paint(ctx, geo, props) {
		const round = 100;
		const color = props.get('--rect-color').toString();

		ctx.beginPath();

		ctx.moveTo(0, 0);
		ctx.lineTo(0, 0);
		ctx.lineTo(geo.width - round, 0);
		ctx.lineTo(geo.width, round);
		ctx.lineTo(geo.width, geo.height);
		ctx.lineTo(0, geo.height);
		ctx.closePath();

		ctx.fillStyle = color;
		ctx.fill();
	}
}

registerPaint('rect', SamplePainter);
