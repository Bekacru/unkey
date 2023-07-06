// Package models contains generated code for schema 'unkey'.
package models

// Code generated by xo. DO NOT EDIT.

import (
	"context"
)

// API represents a row from 'unkey.apis'.
type API struct {
	ID          string `json:"id"`           // id
	Name        string `json:"name"`         // name
	WorkspaceID string `json:"workspace_id"` // workspace_id
	// xo fields
	_exists, _deleted bool
}

// Exists returns true when the [API] exists in the database.
func (a *API) Exists() bool {
	return a._exists
}

// Deleted returns true when the [API] has been marked for deletion
// from the database.
func (a *API) Deleted() bool {
	return a._deleted
}

// Insert inserts the [API] to the database.
func (a *API) Insert(ctx context.Context, db DB) error {
	switch {
	case a._exists: // already exists
		return logerror(&ErrInsertFailed{ErrAlreadyExists})
	case a._deleted: // deleted
		return logerror(&ErrInsertFailed{ErrMarkedForDeletion})
	}
	// insert (manual)
	const sqlstr = `INSERT INTO unkey.apis (` +
		`id, name, workspace_id` +
		`) VALUES (` +
		`?, ?, ?` +
		`)`
	// run
	logf(sqlstr, a.ID, a.Name, a.WorkspaceID)
	if _, err := db.ExecContext(ctx, sqlstr, a.ID, a.Name, a.WorkspaceID); err != nil {
		return logerror(err)
	}
	// set exists
	a._exists = true
	return nil
}

// Update updates a [API] in the database.
func (a *API) Update(ctx context.Context, db DB) error {
	switch {
	case !a._exists: // doesn't exist
		return logerror(&ErrUpdateFailed{ErrDoesNotExist})
	case a._deleted: // deleted
		return logerror(&ErrUpdateFailed{ErrMarkedForDeletion})
	}
	// update with primary key
	const sqlstr = `UPDATE unkey.apis SET ` +
		`name = ?, workspace_id = ? ` +
		`WHERE id = ?`
	// run
	logf(sqlstr, a.Name, a.WorkspaceID, a.ID)
	if _, err := db.ExecContext(ctx, sqlstr, a.Name, a.WorkspaceID, a.ID); err != nil {
		return logerror(err)
	}
	return nil
}

// Save saves the [API] to the database.
func (a *API) Save(ctx context.Context, db DB) error {
	if a.Exists() {
		return a.Update(ctx, db)
	}
	return a.Insert(ctx, db)
}

// Upsert performs an upsert for [API].
func (a *API) Upsert(ctx context.Context, db DB) error {
	switch {
	case a._deleted: // deleted
		return logerror(&ErrUpsertFailed{ErrMarkedForDeletion})
	}
	// upsert
	const sqlstr = `INSERT INTO unkey.apis (` +
		`id, name, workspace_id` +
		`) VALUES (` +
		`?, ?, ?` +
		`)` +
		` ON DUPLICATE KEY UPDATE ` +
		`id = VALUES(id), name = VALUES(name), workspace_id = VALUES(workspace_id)`
	// run
	logf(sqlstr, a.ID, a.Name, a.WorkspaceID)
	if _, err := db.ExecContext(ctx, sqlstr, a.ID, a.Name, a.WorkspaceID); err != nil {
		return logerror(err)
	}
	// set exists
	a._exists = true
	return nil
}

// Delete deletes the [API] from the database.
func (a *API) Delete(ctx context.Context, db DB) error {
	switch {
	case !a._exists: // doesn't exist
		return nil
	case a._deleted: // deleted
		return nil
	}
	// delete with single primary key
	const sqlstr = `DELETE FROM unkey.apis ` +
		`WHERE id = ?`
	// run
	logf(sqlstr, a.ID)
	if _, err := db.ExecContext(ctx, sqlstr, a.ID); err != nil {
		return logerror(err)
	}
	// set deleted
	a._deleted = true
	return nil
}

// APIByID retrieves a row from 'unkey.apis' as a [API].
//
// Generated from index 'apis_id_pkey'.
func APIByID(ctx context.Context, db DB, id string) (*API, error) {
	// query
	const sqlstr = `SELECT ` +
		`id, name, workspace_id ` +
		`FROM unkey.apis ` +
		`WHERE id = ?`
	// run
	logf(sqlstr, id)
	a := API{
		_exists: true,
	}
	if err := db.QueryRowContext(ctx, sqlstr, id).Scan(&a.ID, &a.Name, &a.WorkspaceID); err != nil {
		return nil, logerror(err)
	}
	return &a, nil
}
