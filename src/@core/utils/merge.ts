function isObject(obj: any): obj is Record<string, any> {
    return obj && typeof obj === 'object' && !Array.isArray(obj);
}

export function deepMerge(target: any, source: any): any {
    if (Array.isArray(target) && Array.isArray(source)) {
        const result: any[] = [];
        const targetMap = new Map(target.map((item: any) => [item.id, item]));

        for (const sourceItem of source) {
            if (targetMap.has(sourceItem.id)) {
                const targetItem = targetMap.get(sourceItem.id);
                result.push(deepMerge(targetItem, sourceItem));
                targetMap.delete(sourceItem.id);
            } else {
                result.push(sourceItem);
            }
        }

        // Add remaining items from the target
        for (const remainingItem of targetMap.values()) {
            result.push(remainingItem);
        }

        return result;
    } else if (isObject(target) && isObject(source)) {
        const result: Record<string, any> = { ...target };
        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                if (isObject(source[key]) && target[key]) {
                    result[key] = deepMerge(target[key], source[key]);
                } else if (Array.isArray(source[key]) && Array.isArray(target[key])) {
                    result[key] = deepMerge(target[key], source[key]);
                } else {
                    result[key] = source[key];
                }
            }
        }
        return result;
    } else {
        return source;
    }
}