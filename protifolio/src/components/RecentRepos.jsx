import { useState, useEffect } from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";

const  recentGitRepos = (username) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRepos = async () => {
        try {
            const response = await fetch(
                `https://api.github.com/users/${username}/repos?sort=updated`
            );
            if (!response.ok) throw new Error("Failed to fetch repositories");
            const data = await response.json();
            setRepos(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    fetchRepos();

return { repos, loading, error };
}

export default recentGitRepos;