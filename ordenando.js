const list = document.getElementById("valores");
const entrada = document.getElementById("valor");

const vetor = [];
function add() {
    let elemento = document.createElement("li");
    let textEntrada = document.createTextNode(entrada.value);
    elemento.appendChild(textEntrada);
    list.appendChild(elemento);
    let num = Number(entrada.value);
    vetor.push(num);
}

function ordenar() {
    let novalista = vetor.sort(function (a, b) {
        if (a < b) {
            return -1;
        } else {
            true;
        }
    });
    let novoconteudo = novalista.map(elemento => `<li>${elemento}</li>`);
    list.innerHTML = novoconteudo.join('');
    document.body.appendChild(list);
}



function misturar() {
    // Converte os valores da lista em um vetor
    const arrayValores = Array.from(list.children).map(item => parseFloat(item.textContent));

    // Embaralha o vetor
    shuffle(arrayValores, arrayValores.length * 2);

    // Atualiza a lista com os valores embaralhados
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    arrayValores.forEach(valor => {
        const novoItem = document.createElement('li');
        novoItem.textContent = valor;
        list.appendChild(novoItem);
    });
}
// Função para trocar os valores de duas posições em um vetor
const swap = (vetor, position1, position2) => {
    const temp = vetor[position1];
    vetor[position1] = vetor[position2];
    vetor[position2] = temp;
};

// Função para embaralhar os elementos de um vetor
const shuffle = (vetor, numberOfSwaps) => {
    for (let i = 0; i < numberOfSwaps; i++) {
        const randomIndex1 = Math.floor(Math.random() * vetor.length);
        const randomIndex2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, randomIndex1, randomIndex2);
    }
};

// Função para ordenar um vetor com o algoritmo Bubble Sort
const bubble_sort = (vetor) => {
    const n = vetor.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (vetor[i] > vetor[i + 1]) {
                swap(vetor, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);
};

// Função para encontrar o índice do menor elemento em um vetor
const findIndexOfMinimum = (vetor, startIndex) => {
    let minIndex = startIndex;
    for (let i = startIndex + 1; i < vetor.length; i++) {
        if (vetor[i] < vetor[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex;
};


// Função para ordenar um vetor com o algoritmo Quick Sort
const quick_sort = (vetor, startIndex, endIndex) => {
    if (startIndex < endIndex) {
        const pivotIndex = partition(vetor, startIndex, endIndex);
        quick_sort(vetor, startIndex, pivotIndex - 1);
        quick_sort(vetor, pivotIndex + 1, endIndex);
    }
};

// Função de apoio ao Quick Sort para fazer o particionamento
const partition = (vetor, startIndex, endIndex) => {
    const pivotValue = vetor[endIndex];
    let pivotIndex = startIndex;

    for (let i = startIndex; i < endIndex; i++) {
        if (vetor[i] < pivotValue) {
            swap(vetor, i, pivotIndex);
            pivotIndex++;
        }
    }

    swap(vetor, pivotIndex, endIndex);
    return pivotIndex;
};