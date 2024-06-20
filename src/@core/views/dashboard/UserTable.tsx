
import { Box, Paper } from "@mui/material";
import {
    DataGrid,
    GridActionsCellItem,
    GridColDef,
    GridEventListener,
    GridRowEditStopReasons,
    GridRowModes,
} from "@mui/x-data-grid";
import { useState } from "react";
import { BiEdit, BiSave } from "react-icons/bi";
import { MdCancel, MdDelete } from "react-icons/md";


const userData: User[] = [
    {
        _id: "1",
        name: "John Doe",
        email: "john.doe@example.com",
        phoneNumber: "+1234567890",
        country: "USA",
        occupation: "Software Engineer",
        role: "Admin",
        status: "Active",
        isNew: false,
    },
    {
        _id: "2",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phoneNumber: "+9876543210",
        country: "Canada",
        occupation: "Data Scientist",
        role: "User",
        status: "Active",
        isNew: true,
    },
    {
        _id: "3",
        name: "Michael Johnson",
        email: "michael.johnson@example.com",
        phoneNumber: "+1122334455",
        country: "UK",
        occupation: "Web Developer",
        role: "User",
        status: "Inactive",
        isNew: false,
    },
    {
        _id: "4",
        name: "Emily Brown",
        email: "emily.brown@example.com",
        phoneNumber: "+9988776655",
        country: "Australia",
        occupation: "Product Manager",
        role: "Admin",
        status: "Active",
        isNew: true,
    },
    {
        _id: "5",
        name: "Daniel Wilson",
        email: "daniel.wilson@example.com",
        phoneNumber: "+1123456789",
        country: "Germany",
        occupation: "System Analyst",
        role: "User",
        status: "Active",
        isNew: false,
    },
    {
        _id: "6",
        name: "Olivia Martinez",
        email: "olivia.martinez@example.com",
        phoneNumber: "+1122334455",
        country: "Spain",
        occupation: "UI/UX Designer",
        role: "Admin",
        status: "Active",
        isNew: false,
    },
    {
        _id: "7",
        name: "Noah Taylor",
        email: "noah.taylor@example.com",
        phoneNumber: "+9988776655",
        country: "France",
        occupation: "Software Engineer",
        role: "User",
        status: "Active",
        isNew: true,
    },
    {
        _id: "8",
        name: "Ava Brown",
        email: "ava.brown@example.com",
        phoneNumber: "+1123456789",
        country: "Italy",
        occupation: "Database Administrator",
        role: "User",
        status: "Inactive",
        isNew: false,
    },
    {
        _id: "9",
        name: "Ethan White",
        email: "ethan.white@example.com",
        phoneNumber: "+9988776655",
        country: "Japan",
        occupation: "Data Scientist",
        role: "Admin",
        status: "Active",
        isNew: true,
    },
    {
        _id: "10",
        name: "Sophia Lee",
        email: "sophia.lee@example.com",
        phoneNumber: "+1122334455",
        country: "China",
        occupation: "Web Developer",
        role: "User",
        status: "Active",
        isNew: false,
    },
];


interface User {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    country: string;
    occupation: string;
    role: string;
    status: string;
    isNew?: boolean | undefined;
}

const UserTable: React.FC = () => {
    const [search, setSearch] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [rowModesModel, setRowModesModel] = useState<{
        [id: string]: { mode: GridRowModes; ignoreModifications?: boolean };
    }>({});
    const isLoading = false;
    const data: User[] = userData; // Add your dataUser here
    const [rows, setRows] = useState<User[]>(data);

    // handlers
    const handleRowEditStop: GridEventListener<"rowEditStop"> = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut && event) {
          (event as React.KeyboardEvent | React.MouseEvent).defaultPrevented = true;
        }
      };
    const handleEditClick = (id: string) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id: string) => () => {
        // here i get that id which i wanna edit
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id: string) => () => {
        setRows(rows.filter((row) => row._id !== id));
    };

    const handleCancelClick = (id: string) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row._id === id);
        if (editedRow?.isNew) {
            setRows(rows.filter((row) => row._id !== id));
        }
    };

    const processRowUpdate = (newRow: User): User => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row._id === newRow._id ? updatedRow : row)));
        return updatedRow;
    };

    const handleRowModesModelChange = (
        newRowModesModel: {
            [id: string]: { mode: GridRowModes; ignoreModifications?: boolean };
        }
    ) => {
        setRowModesModel(newRowModesModel);
    };

    const columns: readonly GridColDef<User>[] = [
        { field: "_id", headerName: "ID", flex: 0.5 },
        { field: "name", headerName: "Name", flex: 0.5 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "phoneNumber", headerName: "Phone Number", flex: 0.5 },
        { field: "country", headerName: "Country", flex: 0.4 },
        { field: "occupation", headerName: "Occupation", flex: 1 },
        { field: "role", headerName: "Role", flex: 1, editable: true, valueOptions: ["Super-Admin", "Admin", "Sub-Admin", "User"], },
        { field: "status", headerName: "Active Status", flex: 0.5 },
        {
            field: "actions", type: "actions", headerName: "Actions", flex: 1, cellClassName: "actions",
            getActions: ({ id }: any) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            key={id}
                            icon={<BiSave />}
                            label="Save"
                            sx={{ color: "primary.main", marginRight: ".5rem" }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<MdCancel />}
                            key={id + "_cancel"}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        key={id + "_edit"}
                        icon={<BiEdit />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                        sx={{ marginRight: ".5rem" }}
                    />,
                    <GridActionsCellItem
                        icon={<MdDelete />}
                        key={id + "_delete"}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    return (
        <Paper elevation={2} sx={{ m: " 1rem" }}>
            <Box
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": { border: "none" },
                    "& .MuiDataGrid-cell": { borderBottom: "none" },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: (theme) =>
                            theme.palette?.customBg?.card || "#ffffff", // Default to white if theme or customBg is undefined
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: (theme) =>
                            theme.palette?.customBg?.paper || "#ffffff", // Default to white if theme or customBg is undefined
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: (theme) =>
                            theme.palette?.customBg?.card || "#ffffff", // Default to white if theme or customBg is undefined
                        borderTop: "none",
                    },
                }}
            >
                <DataGrid
                    loading={isLoading || !rows}
                    getRowId={(row) => row._id}
                    rows={rows || []}
                    columns={columns}
                    editMode="row"
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={handleRowModesModelChange}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                />

            </Box>
        </Paper>
    );
};

export default UserTable;
