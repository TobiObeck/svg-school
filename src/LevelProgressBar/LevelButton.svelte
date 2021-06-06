<script>
export let levelCount = 1;

function handleClick(){
    alert('asd', levelCount)
}

</script>

<!--
<div>
    <input type="radio" id="level_{levelCount}" name="levels" value="{levelCount}" on:click={handleClick}>
    <label for="level_{levelCount}">{levelCount}</label><br>
</div>
-->