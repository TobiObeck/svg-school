<script>
  import { onMount, createEventDispatcher } from 'svelte'
	import SvelteCodemirror from './SvelteCodemirror/SvelteCodemirror.svelte'
  import 'codemirror/mode/xml/xml.js'

  const dispatch = createEventDispatcher();

  export let value = ''

	const options = {
    mode: 'xml',
    htmlMode: true,
		lineNumbers: true
	}

  $:
  {
    dispatch('change', { value: value })
  }

</script>

<style>

  :global(.editor)
  {
    font-size: 1.5rem;
  }

  div
  {
    border: 1px solid grey;
  }

</style>

<div>
  <SvelteCodemirror bind:value={value} options={options} class="editor"/>
</div>