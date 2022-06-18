import * as C from './styles'
import { Item } from '../../types/Items'

type Props = {
    item: Item,
    done: (id: number, done: boolean) => void,
    del: (id: number) => void
}

export const ListItem = ({ item, done, del }: Props ) => {

    return (
        <C.Container done={item.done}>
            <input 
            type="checkbox" 
            checked={item.done} 
            onChange={e => done(item.id, e.target.checked)}
            />
            <label>{item.name}</label>
            <div className="image" onClick={() => del(item.id)}>❌</div>
        </C.Container>
    );
}