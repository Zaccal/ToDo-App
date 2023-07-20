export type TypeGetTemplateColums = number | '1/4'

export function GetTemplateColums(value: TypeGetTemplateColums): string {
    switch (typeof(value)) {
        case 'number': return `repeat(${value}, 1fr)` 
        case "string": 
            switch (value) {
                case '1/4': return 'minmax(320px, 0.9fr) 4fr'                    
            }
    }
}