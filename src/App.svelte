<script>
	import LevelProgressBar from "./LevelProgressBar/LevelProgressBar.svelte"
	import SVGLayer from "./SVGLayer/SVGLayer.svelte"
	import SVGGrid from "./SVGGrid/SVGGrid.svelte"
	import CodeSection from "./CodeSection/CodeSection.svelte"
	import LEVELS from "./LEVELS"

	const SEMI_TRANSPARENT = 0.5
	const SIZE = 400

	let levelsPassed = 0
	let userSVG = ""

	$:
	{
		console.log(userSVG)
	}
	
	/*

	function base64SvgToBase64Png (originalBase64, width) {
    	return new Promise(resolve => {
    	    let img = document.createElement('img');
    	    img.onload = function () {
    	        document.body.appendChild(img);
    	        let canvas = document.createElement("canvas");
    	        let ratio = (img.clientWidth / img.clientHeight) || 1;
    	        document.body.removeChild(img);
    	        canvas.width = width;
    	        canvas.height = width / ratio;
    	        let ctx = canvas.getContext("2d");
    	        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    	        try {
    	            let data = canvas.toDataURL('image/png');
    	            resolve(data);
    	        } catch (e) {
    	            resolve(null);
    	        }
    	    };
    	    img.src = originalBase64;
    	});
	}

	
	function save (svg, name = 'download.svg') {
		svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		var svgData = svg.outerHTML;
		var preface = '<?xml version="1.0" standalone="no"?>\r\n';
		var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
		var svgUrl = URL.createObjectURL(svgBlob);

		var downloadLink = document.createElement("a");
		downloadLink.href = svgUrl;
		downloadLink.download = name;
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	}
	*/

</script>

<style>

	main
	{
		display: flex;
		width: 100%;
		height: 100vh;
	}

	content
	{
		flex: 2;
	}

	nav
	{
		flex: 1;
		box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
	}

	content > .section
	{
		padding: 15px;
	}

	nav > .section
	{
		padding: 15px;
	}

	.stacking
	{
		width: 400px;
		height: 400px;
	}

	.layer
	{
		position: absolute;
	}

	.centering
	{
		display: flex;
		justify-content: center;
	}

</style>

<main>
	<content>
		<div class="section centering">
			<div class="stacking">
				<!-- Layer which shows a grid -->
				<div class="layer">
					<SVGGrid size={SIZE} />
				</div>
			
				<div class="layer">
					<!-- Layer which shows how the svg should look like -->
					<SVGLayer svg={LEVELS[levelsPassed].solutionSVG} size={SIZE} opacity={SEMI_TRANSPARENT}/>
				</div>
			
				<div class="layer">
					<!-- Layer which shows how the svg of the user looks like -->
					<SVGLayer svg={userSVG} size={SIZE} />
				</div>
			</div>
		</div>

		<div class="section">
			<!-- Code Mirror Stuff -->
		
			<CodeSection on:change={(e) => { userSVG = e.detail.value }}></CodeSection>
		</div>		
	</content>
	<nav>
		<!-- Shows Tutorial Text -->

		<div class="section">
			<h2>{LEVELS[levelsPassed].heading}</h2>
			{@html LEVELS[levelsPassed].tutorialText}
		</div>

		<div class="section">
			<LevelProgressBar levelsPassed={levelsPassed} amountOfLevels={LEVELS.length} />
		</div>

		<div class="section">
			<button on:click={() => {
				// const solution = base64SvgToBase64Png(LEVELS[levelsPassed].solutionSVG);
				// const attempt = base64SvgToBase64Png(userSVG.svg);
			}}>Check</button>
		</div>
	</nav>
</main>

