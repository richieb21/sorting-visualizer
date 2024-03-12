import { AnimationArrayType } from "@/lib/types";

function runInsertionSort(array: number[], animations: AnimationArrayType) {
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            animations.push([[j, j - 1], false]);
            animations.push([[j, array[j - 1]], true]);
            animations.push([[j - 1, array[j]], true]);
            [array[j], array[j - 1]] = [array[j - 1], array[j]];
            j--;
        }
    }
}

export function generateInsertionSortAnimationArray(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void,
) {
    if (isSorting) return;
    if (array.length <= 1) return;
    
    const animations: AnimationArrayType = [];
    const auxiliaryArray = array.slice();
    runInsertionSort(auxiliaryArray, animations);
    runAnimation(animations);
}