<template>
    <div class="count">
        <span>{{ countStore.count }}</span>
        <br>
        <button @click="increment">+1</button>
        <button @click="countStore.decrement()">-1</button>
    </div>
</template>

<script lang="ts" setup>
import { useCountStore } from '@/store/count';
import { onUnmounted } from 'vue';

const countStore = useCountStore()

const increment = () => {
    countStore.increment()
}

const subscribe = countStore.$onAction(({ name, store, args, after, onError }) => {
    const startTime = Date.now()
    // 这将在执行 "store "的 action 之前触发。
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // 这将在 action 成功并完全运行后触发。
    // 它等待着任何返回的 promise
    after((result) => {
        console.log(
            `Finished "${name}" after ${Date.now() - startTime
            }ms.\nResult: ${result}.`
        )
    })

    // 如果 action 抛出或返回一个拒绝的 promise，这将触发
    onError((error) => {
        console.warn(
            `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
        )
    })
})

onUnmounted(() => {
    subscribe()
})

</script>

<style>
button {
    margin: 10px;
}
</style>