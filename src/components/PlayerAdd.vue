<template>
    <div class='padder'>
        <div>
            <label for='playerName'> {{ $t('playerInput') }}: </label>
            <input id='playerName' type="text">
        </div>
        <div class="marger">
            <button>{{ $t('playerAdd') }}</button>
        </div>
    </div>
</template>

<style scoped>
    .padder {
        padding: 20px; 
    }
    .marger {
        margin-top: 10px; 
    }
</style>