import { generateBubbleSortAnimationArray } from "@/algorithms/bubbleSort";
import { AnimationArrayType, SortingAlgorithmType } from "./types";
import { generateSelectionSortAnimationArray } from "@/algorithms/selectionSort";
import { generateInsertionSortAnimationArray } from "@/algorithms/insertionSort";
import { generateQuickSortAnimationArray } from "@/algorithms/quickSort";
import { generateMergeSortAnimationArray } from "@/algorithms/mergeSort";

export const MIN_ANIMATION_SPEED = 10;
export const MAX_ANIMATION_SPEED = 400;

export function generateRandomNumberFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1));
}

export const algorithmOptions = [
    { label: "Bubble", value: "bubble" },
    { label: "Insertion", value: "insertion" },
    { label: "Selection", value: "selection" },
    { label: "Merge", value: "merge" },
    { label: "Quick", value: "quick" }
];

export function generateAnimationArray(
    selectedAlgorithm: SortingAlgorithmType,
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void,
) {
    switch(selectedAlgorithm) {
        case "bubble":
            generateBubbleSortAnimationArray(isSorting, array, runAnimation);
            break;
        case "insertion":
            generateInsertionSortAnimationArray(isSorting, array, runAnimation);
            break;
        case "selection":
            generateSelectionSortAnimationArray(isSorting, array, runAnimation);
            break;
        case "merge":
            generateMergeSortAnimationArray(isSorting, array, runAnimation);
            break;
        case "quick":
            generateQuickSortAnimationArray(isSorting, array, runAnimation);
            break;
        default:
            break;
    }
}

export const sortingAlgorithmsData = {
    bubble: {
        title: "Bubble Sort",
        description: "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
        worstCase: "O(n^2)",
        bestCase: "O(n)",
        averageCase: "O(n^2)",
    },
    insertion: {
        title: "Insertion Sort",
        description: "Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.",
        worstCase: "O(n^2)",
        bestCase: "O(n)",
        averageCase: "O(n^2)",
    },
    selection: {
        title: "Selection Sort",
        description: "Selection sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted.",
        worstCase: "O(n^2)",
        bestCase: "O(n^2)",
        averageCase: "O(n^2)",
    },
    merge: {
        title: "Merge Sort",
        description: "Merge sort is an efficient, stable, comparison sorting algorithm.",
        worstCase: "O(n log n)",
        bestCase: "O(n log n)",
        averageCase: "O(n log n)",
    },
    quick: {
        title: "Quick Sort",
        description: "Quick sort is an efficient, in-place, comparison sorting algorithm.",
        worstCase: "O(n^2)",
        bestCase: "O(n log n)",
        averageCase: "O(n log n)",
    }
}