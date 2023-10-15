export type TypeGetTemplateColums = number | '2/1' | '1/2'

export function GetTemplateColums(value: TypeGetTemplateColums): string {
    switch (typeof(value)) {
        case 'number': return `repeat(${value}, 1fr)` 
        case "string": 
            switch (value) {
                case '2/1': return '4fr minmax(520px, 0.9fr)'
                case '1/2': return 'minmax(320px, 0.9fr) 4fr'
            }
    }
}