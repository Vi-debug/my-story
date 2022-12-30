import { backgroundColor, mainColor } from '../../const/colors';
import useWindowDimensions from '../../global-hook/dimension';
import './am.css'

function Am () {
    const { width } = useWindowDimensions();
    return (
        <div style={styles.mainContainer} className='flex-1'>
            <p style={{marginLeft: width > 600 ? (width - 600) * 0.2 : 0}} className="am-title">I'm...</p>
        </div>
    );
}

export default Am;

const styles = {
    mainContainer: {
        backgroundColor: backgroundColor,
        height: '100%',
    }
}