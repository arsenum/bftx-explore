import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// import AccessingVineyard from '../../../ui/pages/clientSide/AccessingVineyard';
//import {composeWithTracker} from 'react-komposer';
import {compose} from "react-komposer";//'meteor/nicocrm:react-komposer-tracker'
import {Transactions} from '/imports/api/lib/collections';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { QRCode } from 'react-qr-svg';
import Checkbox from '@material-ui/core/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import Favorite from '@material-ui/icons/Visibility';
import FavoriteBorder from '@material-ui/icons/VisibilityOff';
import green from '@material-ui/core/colors/green';
class Save extends React.Component {
    state = {encrypting:true, decrypted:false}
    constructor(p){
        super(p)
        this.props = p;
    }
    Decrypt = () =>
    {
        FlowRouter.go("/decrypt")
    }
    Encrypt = () =>
    {
        this.setState({encrypting:true})
        //FlowRouter.go("/decrypt")
    }

    Print = () =>
    {
        window.print();
    }
    Send = () =>
    {
        location.href="mailto:?subject=Transaction:" + this.transaction.Id + "&body="+location.href
    }
    Pdf = () =>
    {
        alert("todo: Download PDF")
    }
    Done = () =>
    {
        FlowRouter.go("/")
    }
    render() {
        Meteor.call("GetPass")
        const { classes } = this.props;
        const t = Transactions.findOne({Id:FlowRouter.current().params.t})
        this.transaction = t;
        if(this.state.encrypting)
        {
            classes.checkbox = classes.checkboxVisible;
        }else {
            classes.checkbox = classes.checkboxHidden;
        }

        if(t==undefined)return(<div></div>);
        return (
            <div className="wrapper">
                <div className="QRCode">
                    <div className="section-to-print">
                        <QRCode  value={this.transaction.Id} />
                    </div>
                </div>
                <div className="noPrint">
                    <Button variant="raised" size="medium" color="primary" className={classes.button} onClick={this.Decrypt}>
                        Decrypt with QR Key
                    </Button>
                    {/*<Button variant="raised" size="medium" color="primary" className={classes.button} onClick={this.Encrypt}>*/}
                    {/*Create QR Key*/}
                    {/*</Button>*/}
                    {/*&nbsp;*/}
                    <Button variant="raised" size="medium" color="primary" className={classes.button} onClick={this.Print}>
                        Print
                    </Button>
                    &nbsp;
                    <Button variant="raised" size="medium" color="primary" className={classes.button} onClick={this.Send}>
                        Send
                    </Button>
                    &nbsp;
                    <Button variant="raised" size="medium" color="primary" className={classes.button} onClick={this.Pdf}>
                        Pdf
                    </Button>
                    &nbsp;
                    <Button variant="raised" size="medium" color="primary" className={classes.button} onClick={this.Done}>
                        Done
                    </Button>
                </div>
                <div className="section-to-print">
                    <div className={classes.doc}>
                        <form method="get" action="https://www.passsource.com/pass/create.php">
                            <input type="hidden" name="templateHash" value="eNortjIysVIqLA00jIiyyC0pMXKOcPYqyrIozC4ItLVVsgZcMKPxCfk," />
                            <label>Enter your member number:</label>
                            <input type="text" name="barcode_message" />
                            <input type="submit" value="Get Pass" />
                        </form>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Id} /> </span>
                        Id : ${this.transaction.Id} <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        Shipper : ${t.Properties.Shipper} <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        BolNum : 15455 <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        RefNum : 154532165 <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        Consignee : teste <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        HouseBill : <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        Vessel : 132153456 <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        Packages : <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        PackType : <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        INCOTerms : <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        PortOfLoading : 21514 <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        PortOfDischarge : 51651 <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        Destination : <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        MarksAndNumbers : <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        UnitOfWeight : <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        DeliverAgent : <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        ReceiveAgent : <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        Container : <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        ContainerSeal : <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        ContainerMode : <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        ContainerType : <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        Volume : <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        UnitOfVolume : <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        NotifyAddress : 89-91 City Rd Southbank 3006 VIC Australia <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        DescOfGoods : This is the goods description. <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        GrossWeight : 15523 <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        FreightPayableAmt : 354534 <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        FreightAdvAmt : 35448552 <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        GeneralInstructions : There are many general instructions. <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        DateShipped : 20161128 <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        IssueDetails.PlaceOfIssue : Place 1 <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        IssueDetails.DateOfIssue : 20171228 <br/>
                        <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        NumBol : 15555 <br/>
                        <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        MasterInfo.FirstName : First name masterinfo <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        MasterInfo.LastName : last name masterinfo <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        MasterInfo.Sig : teste <br/>


                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        AgentForMaster.FirstName : First name masterinfo <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        AgentForMaster.LastName : last name masterinfo <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        AgentForMaster.Sig : teste <br/>


                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        AgentForOwner.FirstName : First name masterinfo <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        AgentForOwner.LastName : last name masterinfo <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        AgentForOwnerSig : teste <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        ConditionsForCarriage : blablabsla <br/>

                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        EncryptionMetaData : <br/>

                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        Signhash : /t6CXddokVckXt1OGtmYmw== <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        Signature : 1453166459388149541856721135232200190801181842112215522622612514712315111117584271871141111541282020211623918863471322097161131108513118253130114191353534802491947725 <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        Verified : true <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        Transmitted : true <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        Amendment : <br/>
                        <span className="eye"><Checkbox  className={classes.checkbox} icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked={this.state.decrypted} value={this.transaction.Shipper} /></span>
                        Private : <br/>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,

    },
    doc: {
        margin: theme.spacing.unit,

    },
    block: {
        maxWidth: 250,
    },
    checkbox: {
        //   marginBottom: 16,
        //   color: green[500],
        visibility: "hidden",
        height:0
    },
    checkboxHidden: {
        //   marginBottom: 16,
        //   color: green[500],
        visibility: "hidden",
    },
    checkboxVisible: {
        //   marginBottom: 16,
        //   color: green[500],
        visibility: "visible",
        height:20,

    },
    root: {
        visibility: "hidden",
        height:0

    },
});
Save.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withTracker(props => {
    const handle = Meteor.subscribe('transactions');
    return {
        //currentUser: Meteor.user(),
        listLoading: !handle.ready(),
        transactions: Transactions.find().fetch(),
    };
})(withStyles(styles)(Save));