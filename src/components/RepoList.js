import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { Container, Typography, Card, CardContent, CircularProgress } from '@material-ui/core';

const RepoList = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        My GitHub Repositories
      </Typography>
      {data.viewer.repositories.nodes.map((repo) => (
        <Card key={repo.id} style={{ marginBottom: '16px', padding: '10px', boxShadow: '2px 4px 10px rgba(0,0,0,0.1)' }}>
          <CardContent>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
              <a href={repo.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#1976D2' }}>
                {repo.name}
              </a>
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ marginBottom: '8px' }}>
              {repo.description || 'No description available'}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Last updated: {new Date(repo.updatedAt).toLocaleDateString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default RepoList;
