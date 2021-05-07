<script>
import LevelButton from "./LevelButton.svelte"
export let amountOfLevels = 10
export let levelsPassed = 0
export let currentLevel = 0

</script>
    
<style>

</style>
<p>
You passed {levelsPassed} of {amountOfLevels} Levels!!!
You are in Level {{currentLevel}}
</p>
<section style="">
    <p>Level select:</p>
    <LevelButton></LevelButton>
    <input type="radio" id="level_2" name="levels" value="2">
    <label for="level_2">2</label><br>
    <input type="radio" id="level_3" name="levels" value="3">
    <label for="level_3">3</label>
</section>