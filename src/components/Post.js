import './CssFolder/Post.css';
import { Avatar, Button } from '@mui/material';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useState } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"

const Post = () => {
    const [ModalOpen, setModalOpen] = useState(false)
    const handleClose = () => setModalOpen(false);
    const handleOpen = () => setModalOpen(true);


    return (
        <div className='post'>
            <div className="post-info">
                <Avatar />
                <h4>User Name</h4>
                <small>Timestamp</small>
            </div>
            <div className="post-body">
                <div className="post-question">
                    <p>This is a test question</p>
                    <Button onClick={handleOpen} variant="outlined" size='small' className='post-btnAnswer' color='error'>Answer</Button>

                    <Modal
                        open={ModalOpen}
                        onClose={handleClose}
                        closeOnEsc
                        center
                        closeOnOverlayClick={false}
                        styles={{
                            overlay: {
                                height: "auto",
                            }
                        }}>
                        <div className="modal-question">
                            <h1>This is test question.</h1>
                            <p>Asked by {" "}<span className='name'>Username</span> on <span className='name'>timestamp</span></p>
                        </div>
                        <div className="modal-answer">
                            <ReactQuill placeholder='Enter your answer' />
                        </div>
                        <div className="p-modal-buttons">
                            <Button className='p-cancle-btn' size='small' variant="outlined" color="error" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button style={{
                                backgroundColor: "black",
                                borderRadius: "20px"
                            }} size='large' variant="contained" type='submit' className='p-add-btn'>Add Question</Button>
                        </div>
                    </Modal>
                </div>
            </div>
            <div className="post-footer">
                <div className="post-footerActions">
                    <ArrowUpwardOutlinedIcon />
                    <ArrowDownwardOutlinedIcon style={{
                        marginLeft: "30px"
                    }} />
                </div>
                <RepeatOutlinedIcon />
                <ChatBubbleOutlineOutlinedIcon />
                <div className="post-footerLeft">
                    <ShareOutlinedIcon />
                    <MoreHorizOutlinedIcon />
                </div>
            </div>
            <p style={{
                color: "rgba(0,0,0,0.5)",
                fontSize: "12px",
                fontWeight: "bold",
                margin: "10px 0"
            }}>1 Answer</p>
            <div style={{
                margin: "5px 0px 0px 0px",
                padding: "5px,0px,0px,20px",
                borderTop: "1px solid lightgray"
            }} className="post-answer">
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    padding: "10px 5px",
                    borderTop: "1px solid lightgray"
                }} className="post-answerContainer">
                    <div style={{

                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#888"
                    }} className="post-answered">
                        <Avatar />
                        <div className="post-info">
                            <p style={{
                                marginLeft: "10px"
                            }}>Username</p>
                            <p style={{
                                marginLeft: "10px"
                            }}>Timestamp</p>
                        </div>
                    </div>
                    <div className="post-answer">
                        this is test answer
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;