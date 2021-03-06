/**
 * Created by hugo.queiros on 28/03/16.
 */
import { ITEM_SELECTED } from './action';

export function Item_Reducer(state = [], action) {
    switch (action.type) {
        case ITEM_SELECTED:
            return Object.assign(state,
                {
                    Items: state.Items.map((item, index) => {
                        console.log(item.id === action.id, item.id, action.id);
                        return Object.assign(item, {
                            selected: (item.id === action.id ? true : false)
                        });
                    })
                }
            );
        default:
            return state;
    }
}