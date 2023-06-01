import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Container, Divider, Chip, Paper, Button  } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { styled } from '@mui/material/styles';
import style from './stylePages.module.css';
import ProjectsCard from '../components/Cards';
import { PROJECTS, TAGS } from '../data/ProjectsInfo';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));
  
export default function Projects() {
    const [activeFilter, setActiveFilter] = useState([]);
    const [showMe, setShowMe] = useState(false);

    useEffect(() => {
        initializeActiveFilter();
      }, []);

    const sortActiveFilter = (data) => {
        return data.sort((a, b) => a.label.localeCompare(b.label));
    };

    const handleDelete = (chipToDelete) => () => {
        setActiveFilter((chips) =>
            chips.map((chip) =>
            chip.key === chipToDelete.key ? { ...chip, active: false } : chip
            )
        );
    };

    const handleClick = (tag) => () => {
        setActiveFilter((chips) =>
          chips.map((chip) =>
            chip.key === tag.key ? { ...chip, active: true } : chip
          )
        );
        setShowMe(true);
    };

    const initializeActiveFilter = () => {
        const transformedData = Object.entries(TAGS).map(([key, label]) => ({
          key: parseInt(key),
          label,
          active: false
        }));
        const sortedData = sortActiveFilter(transformedData);
        setActiveFilter(sortedData);
        setShowMe(false);
    };

    const filteredProjects = activeFilter.some((tag) => tag.active)
    ? PROJECTS.filter((project) => {
        const projectTags = project.tags;
        const activeTags = activeFilter.filter((tag) => tag.active);
        return activeTags.some((tag) => projectTags.includes(tag.label));
      })
    : PROJECTS;

    return (
        <Box>
            <Container>
                <h1>My Projects</h1>
                <Divider />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Escribir sobre lenguajes, maybe ponerlos en grande or whatever</p>
            </Container>
            <Container>
                <Paper
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                        p: 0.5,
                        m: 0,
                    }}
                    component="ul"
                    >
                    {activeFilter.map((value, index) => (
                        <ListItem key={index}>
                            <Chip
                                label={value.label}
                                variant={value.active ? "filled" : "outlined"}
                                onDelete={value.active ? handleDelete(value) : handleClick(value)}
                                color="primary"
                                deleteIcon={value.active ? undefined :  <DoneIcon />}
                            />
                        </ListItem>
                    ))}
                    {showMe && <Container style={{ display: "flex", justifyContent: "center" }}>
                        <Button variant="text" onClick={initializeActiveFilter}>
                            Reset Filters
                        </Button>
                    </Container>}
                </Paper>
            </Container>

            <Container>
                <ProjectsCard data={filteredProjects}></ProjectsCard>
            </Container>

        </Box>
    );
}