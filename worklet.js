class SamplePainter {
	static get inputProperties() {
		return [
			'--ellipse-radi',
		];
	}

	paint(ctx, geo, props) {
		const r = props.get('--ellipse-radi');
		const color = '#f8e6db';

		for (let i = 0; i < geo.width; i ++) {
			let x = i * 10;
			let y = 50;
			let radi = Math.random() * r;
			ctx.beginPath();
			ctx.arc(x, y, radi, 0, Math.PI * 2, false);
			ctx.closePath();

			ctx.fillStyle = color;
			ctx.fill();
		}
	}
}

registerPaint('ellipse', SamplePainter);
