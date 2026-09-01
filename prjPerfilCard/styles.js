import { stylesheet } from 'react-native';
const styles = Stylesheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowoffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
        borderwidth: 3,
        borderColor:
            '#4967E9'
    },
    name: {
        fontSize: 24,
        fontweight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    role: {
        fontsize: 16,
        color: '#666',
        marginBottom: 20,
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 20,
        borderTopwidth: stylesheet.hairlinewidth,
        borderTopColor: '#e0e0e0',
    },
    statItem: {
        alignItems: 'center',
    },
    statvalue: {
        fontSize: 20,
        fontweight: 'bold',
        color: '#4967E9'
    },
    statLabel: {
        fontsize: 14,
        color: '#999',
    },
});

export default styles;