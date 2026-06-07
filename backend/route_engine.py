import networkx as nx

G = nx.Graph()

G.add_edge("Railway Station", "Road A", weight=5)
G.add_edge("Railway Station", "Road B", weight=10)
G.add_edge("Road A", "Sangam", weight=20)
G.add_edge("Road B", "Sangam", weight=5)

def get_route(source, destination):
    return nx.shortest_path(
        G,
        source,
        destination,
        weight="weight"
    )