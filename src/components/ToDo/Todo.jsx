import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const ListTodo = ({ prop }) => {
    console.log({ prop });
    return (

        <List sx={{ width: '100%' }}>

            {prop.map((value) => (
                <ListItem
                    key={value.id}
                >
                    <ListItemText primary={`To do: ${value.title} | ${value.completed === true ? "Completed" : "Not completed"}`} />
                </ListItem>
            ))}
        </List>

    );
};


