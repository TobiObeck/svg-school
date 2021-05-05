<script>

	import LevelProgressBar from "./LevelProgressBar/LevelProgressBar.svelte"
	import SVGLayer from "./SVGLayer/SVGLayer.svelte"
	import SVGGrid from "./SVGGrid/SVGGrid.svelte"
	import CodeSection from "./CodeSection/CodeSection.svelte"
	import MaximumSizeSquare from './MaximumSizeSquare/MaximumSizeSquare.svelte'
	import { calculateSimilarityOfSVGs } from "./calculateSimilarityOfSVGs"
	import LEVELS from "./LEVELS"

	import Icon from 'fa-svelte'
	import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup'
	import { faClone } from '@fortawesome/free-solid-svg-icons/faClone'
	import debounce from 'lodash/debounce'
	const { round } = Math

	const DISPLAY = {
		PARALLEL: 0,
		STACKED: 1
	}

	const SEMI_TRANSPARENT = 0.5
	const DEBOUNCE_TIME = 750

	let levelsPassed = 0
	let userSVG = ""
	let displayMode = DISPLAY.STACKED

	let solutionLayer 
	let userLayer 

	let similarityPromise = new Promise((resolve) => resolve(0))
	
	const onCodeSectionChangeDebounce = debounce((event) => 
	{
		const solutionSVGElement = solutionLayer.getSVGElement()
		const userSVGElement = userLayer.getSVGElement()

		userSVG = event.detail.value
		similarityPromise = calculateSimilarityOfSVGs(solutionSVGElement, userSVGElement)
	}, DEBOUNCE_TIME)

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
		height: 100%;
	}

	nav
	{
		flex: 1;
		box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
	}

	content > .section
	{
		width: calc(100% - 30px);
		padding: 15px;
	}

	nav > .section
	{
		padding: 15px;
	}

	.stacking
	{
		position:relative;
		width: 100%;
		height: 100%;
	}

	.layer
	{
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.centering
	{
		display: flex;
		justify-content: center;
	}

	.fullsize
	{
		width:100%; 
		height: 100%
	}

	.justify-right
	{
		display: flex;
		justify-content: flex-end;
		margin: 0 10px;
	}

	.error
	{
		color: red;
	}

	#display-section
	{
		height: calc(50% - 30px);
	}

	#code-section
	{
		height: calc(50% - 30px);
	}

</style>


<main>
	<content>
		<div class="justify-right">

			<button on:click={() => { displayMode = DISPLAY.STACKED}}>
				<Icon icon={faLayerGroup}></Icon>
			</button>
			<button on:click={() => { displayMode = DISPLAY.PARALLEL}}>
				<Icon icon={faClone}></Icon>
			</button>
		</div>

		<div id="display-section" class="section centering">
			{#if displayMode === DISPLAY.STACKED}
				<MaximumSizeSquare>
					<div class="stacking">
						<!-- Layer which shows a grid -->
						<div class="layer">
							<SVGGrid />
						</div>
					
						<div class="layer">
							<!-- Layer which shows how the svg should look like -->
							<SVGLayer bind:this={solutionLayer} svg={LEVELS[levelsPassed].solutionSVG} opacity={SEMI_TRANSPARENT}/>
						</div>
					
						<div class="layer">
							<!-- Layer which shows how the svg of the user looks like -->
							<SVGLayer bind:this={userLayer} svg={userSVG} />
						</div>
					</div>
				</MaximumSizeSquare>
			{/if}

			{#if displayMode === DISPLAY.PARALLEL}
				<div class="fullsize">
					<MaximumSizeSquare>
						<div class="stacking">
							<!-- Layer which shows a grid -->
							<div class="layer">
								<SVGGrid/>
							</div>

							<div class="layer">
								<!-- Layer which shows how the svg of the user looks like -->
								<SVGLayer bind:this={userLayer} svg={userSVG} />
							</div>
						</div>
					</MaximumSizeSquare>
				</div>

				<div class="fullsize">
					<MaximumSizeSquare>
						<div class="stacking">
							<!-- Layer which shows a grid -->
							<div class="layer">
								<SVGGrid />
							</div>

							<div class="layer">
								<!-- Layer which shows how the svg should look like -->
								<SVGLayer bind:this={solutionLayer} svg={LEVELS[levelsPassed].solutionSVG}/>
							</div>
						</div>
					</MaximumSizeSquare>
				</div>
			{/if}

		</div>

		<div id="code-section" class="section">
			<CodeSection on:change={(e) => { onCodeSectionChangeDebounce(e) }}></CodeSection>
		</div>		
	</content>
	<nav>
		<div class="section">
			<h2>{LEVELS[levelsPassed].heading}</h2>
			{@html LEVELS[levelsPassed].tutorialText}
		</div>

		<div class="section">
			<LevelProgressBar levelsPassed={levelsPassed} amountOfLevels={LEVELS.length} />
		</div>

		<div class="section">
			{#await similarityPromise}
				<p>...waiting</p>
			{:then similarity}
				<p>The Similarity is {round(similarity * 100)}%</p>
			{:catch error}
				<p class="error">{error.message}</p>
			{/await}
		</div>

		<div class="section">
			{#await similarityPromise}
				<span></span>
			{:then similarity}
				{#if similarity > 90 }
					<button on:click={() => {
						dispatch('nextLevel', {})
					}}>Next Level</button>
				{/if}
			{:catch error}
				<p class="error">{error.message}</p>
			{/await}

		</div>
	</nav>
</main>